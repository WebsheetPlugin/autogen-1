﻿// Copyright (c) Microsoft Corporation. All rights reserved.
// AgentExtension.cs

using System.Text;
namespace AutoGen.DotnetInteractive;

public static class AgentExtension
{
    /// <summary>
    /// Register an AutoReply hook to run dotnet code block from message.
    /// This hook will first detect if there's any dotnet code block (e.g. ```csharp and ```) in the most recent message.
    /// if there's any, it will run the code block and send the result back as reply.
    /// </summary>
    /// <param name="agent"></param>
    /// <example>
    /// <![CDATA[
    /// [!code-csharp[Dynamic_GroupChat_Get_MLNET_PR](~/../sample/AutoGen.BasicSamples/Example04_Dynamic_GroupChat_Get_MLNET_PR.cs)]
    /// ]]>
    /// </example>
    public static IAgent RegisterDotnetCodeBlockExectionHook(
        this IAgent agent,
        InteractiveService interactiveService,
        string codeBlockPrefix = "```csharp",
        string codeBlockSuffix = "```",
        int maximumOutputToKeep = 500)
    {
        return agent.RegisterReply(async (msgs, ct) =>
        {
            var lastMessage = msgs.LastOrDefault();
            if (lastMessage == null || lastMessage.Content is null)
            {
                return null;
            }

            // retrieve all code blocks from last message
            var codeBlocks = lastMessage.Content.Split(new[] { codeBlockPrefix }, StringSplitOptions.RemoveEmptyEntries);
            if (codeBlocks.Length <= 0)
            {
                return null;
            }

            // run code blocks
            var result = new StringBuilder();
            var i = 0;
            result.AppendLine(@$"// [DOTNET_CODE_BLOCK_EXECUTION]");
            foreach (var codeBlock in codeBlocks)
            {
                var codeBlockIndex = codeBlock.IndexOf(codeBlockSuffix);

                if (codeBlockIndex == -1)
                {
                    continue;
                }

                // remove code block suffix
                var code = codeBlock.Substring(0, codeBlockIndex).Trim();

                if (code.Length == 0)
                {
                    continue;
                }

                var codeResult = await interactiveService.SubmitCSharpCodeAsync(code, ct);
                if (codeResult != null)
                {
                    result.AppendLine(@$"### Executing result for code block {i++}");
                    result.AppendLine(codeResult);
                    result.AppendLine("### End of executing result ###");
                }
            }

            return new Message(Role.Assistant, result.ToString().Substring(0, maximumOutputToKeep), from: agent.Name);
        });
    }
}