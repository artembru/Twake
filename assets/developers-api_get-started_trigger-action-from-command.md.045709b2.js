import{_ as e,c as i,o as t,a as o}from"./app.2921fbb9.js";const g=JSON.parse('{"title":"Trigger action from command","description":"Trigger action from command","frontmatter":{"description":"Trigger action from command"},"headers":[{"level":2,"title":"Introduction:","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Prerequisites:","slug":"prerequisites","link":"#prerequisites","children":[]},{"level":2,"title":"Steps:","slug":"steps","link":"#steps","children":[{"level":3,"title":"1. Let your application listen to command","slug":"_1-let-your-application-listen-to-command","link":"#_1-let-your-application-listen-to-command","children":[]},{"level":3,"title":"2. Use your command in a channel","slug":"_2-use-your-command-in-a-channel","link":"#_2-use-your-command-in-a-channel","children":[]}]}],"relativePath":"developers-api/get-started/trigger-action-from-command.md"}'),a={name:"developers-api/get-started/trigger-action-from-command.md"},n=o('<h1 id="trigger-action-from-command" tabindex="-1">Trigger action from command <a class="header-anchor" href="#trigger-action-from-command" aria-hidden="true">#</a></h1><h2 id="introduction" tabindex="-1">Introduction: <a href="#introduction" id="introduction"></a> <a class="header-anchor" href="#introduction" aria-hidden="true">#</a></h2><p>This guide will introduce you to trigger action from your application using command</p><h2 id="prerequisites" tabindex="-1">Prerequisites: <a href="#prerequisites" id="prerequisites"></a> <a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a></h2><ul><li>You have already created a Twake application.</li><li>Your application is installed and saved in your company.</li></ul><h2 id="steps" tabindex="-1">Steps: <a href="#steps" id="steps"></a> <a class="header-anchor" href="#steps" aria-hidden="true">#</a></h2><h3 id="_1-let-your-application-listen-to-command" tabindex="-1">1. Let your application listen to command <a class="header-anchor" href="#_1-let-your-application-listen-to-command" aria-hidden="true">#</a></h3><ul><li><p>Go in your app developer&#39;s setting: </p><ul><li>Click on your username in the top left corner</li><li>Go to workspace settings </li><li>Go to integrations </li><li>Click on the three-dot next to your application</li><li>Open developper setting </li></ul></li><li><p>Click on display </p></li><li><p>You will find and editable object containing a twake object</p></li><li><p>Add a new property commands in this object like this:</p><ul><li><code>&quot;commands&quot; : [{&quot;command&quot;: string, &quot;descritpion&quot;: string }]</code></li><li>The first property of commands is command that let you define a name for your command, by default the command name is the name of your application. </li><li>The second property of command is description that let you describe the way to use the command you want to define.</li></ul></li></ul><h3 id="_2-use-your-command-in-a-channel" tabindex="-1">2. Use your command in a channel <a class="header-anchor" href="#_2-use-your-command-in-a-channel" aria-hidden="true">#</a></h3><ul><li>In the message editor write /command </li><li>A popup displaying the description on how to use the command related to your application should open.</li></ul><p>__</p>',11),r=[n];function l(d,c,s,m,p,u){return t(),i("div",null,r)}const _=e(a,[["render",l]]);export{g as __pageData,_ as default};