"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[106],{5564:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(5893),a=t(1151);const o={sidebar_label:"society_of_mind_agent",title:"agentchat.contrib.society_of_mind_agent"},i=void 0,s={id:"reference/agentchat/contrib/society_of_mind_agent",title:"agentchat.contrib.society_of_mind_agent",description:"SocietyOfMindAgent",source:"@site/docs/reference/agentchat/contrib/society_of_mind_agent.md",sourceDirName:"reference/agentchat/contrib",slug:"/reference/agentchat/contrib/society_of_mind_agent",permalink:"/autogen/docs/reference/agentchat/contrib/society_of_mind_agent",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/reference/agentchat/contrib/society_of_mind_agent.md",tags:[],version:"current",frontMatter:{sidebar_label:"society_of_mind_agent",title:"agentchat.contrib.society_of_mind_agent"},sidebar:"referenceSideBar",previous:{title:"retrieve_user_proxy_agent",permalink:"/autogen/docs/reference/agentchat/contrib/retrieve_user_proxy_agent"},next:{title:"text_analyzer_agent",permalink:"/autogen/docs/reference/agentchat/contrib/text_analyzer_agent"}},c={},l=[{value:"SocietyOfMindAgent",id:"societyofmindagent",level:2},{value:"chat_manager",id:"chat_manager",level:3},{value:"update_chat_manager",id:"update_chat_manager",level:3},{value:"generate_inner_monologue_reply",id:"generate_inner_monologue_reply",level:3}];function g(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"societyofmindagent",children:"SocietyOfMindAgent"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class SocietyOfMindAgent(ConversableAgent)\n"})}),"\n",(0,r.jsx)(n.p,{children:"(In preview) A single agent that runs a Group Chat as an inner monologue.\nAt the end of the conversation (termination for any reason), the SocietyOfMindAgent\napplies the response_preparer method on the entire inner monologue message history to\nextract a final answer for the reply."}),"\n",(0,r.jsxs)(n.p,{children:["Most arguments are inherited from ConversableAgent. New arguments are:\nchat_manager (GroupChatManager): the group chat manager that will be running the inner monologue\nresponse_preparer (Optional, Callable or String): If response_preparer is a callable function, then\nit should have the signature:\nf( self: SocietyOfMindAgent, messages: List[Dict])\nwhere ",(0,r.jsx)(n.code,{children:"self"})," is this SocietyOfMindAgent, and ",(0,r.jsx)(n.code,{children:"messages"})," is a list of inner-monologue messages.\nThe function should return a string representing the final response (extracted or prepared)\nfrom that history.\nIf response_preparer is a string, then it should be the LLM prompt used to extract the final\nmessage from the inner chat transcript.\nThe default response_preparer depends on if an llm_config is provided. If llm_config is False,\nthen the response_preparer deterministically returns the last message in the inner-monolgue. If\nllm_config is set to anything else, then a default LLM prompt is used."]}),"\n",(0,r.jsx)(n.h3,{id:"chat_manager",children:"chat_manager"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"@property\ndef chat_manager() -> Union[GroupChatManager, None]\n"})}),"\n",(0,r.jsx)(n.p,{children:"Return the group chat manager."}),"\n",(0,r.jsx)(n.h3,{id:"update_chat_manager",children:"update_chat_manager"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"def update_chat_manager(chat_manager: Union[GroupChatManager, None])\n"})}),"\n",(0,r.jsx)(n.p,{children:"Update the chat manager."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"chat_manager"})," ",(0,r.jsx)(n.em,{children:"GroupChatManager"})," - the group chat manager"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"generate_inner_monologue_reply",children:"generate_inner_monologue_reply"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"def generate_inner_monologue_reply(\n    messages: Optional[List[Dict]] = None,\n    sender: Optional[Agent] = None,\n    config: Optional[OpenAIWrapper] = None\n) -> Tuple[bool, Union[str, Dict, None]]\n"})}),"\n",(0,r.jsx)(n.p,{children:"Generate a reply by running the group chat"})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>i});var r=t(7294);const a={},o=r.createContext(a);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);