#Rendering Environments
1. Client -> Web Browser => similar to how react applications work
2. Server => Node.js Runtime 

### Client side rendering (CSR)
- Larger the bundles -> more m/m neeeded on the client to load all these components.
- Resource Heavy
- No SEO -> brwsers can't view our content, because they cannot excecute js code, so they cannot render our components 
- Less Secure -> any sensitive data we have in our components or their dependencies will be exposed to the client (like API key)

### Server side rendering (SSR)

- Smaller bundles -> we only sent the essential components to the client and prevent bundle from becoming unnesssarily large.
- Resource handling -> Server handles most of the rendering we need less resources on the client + Because rendering is  dine on the server and we send the actual content to the client => SEARCH ENGINE bots can view and index our pages.
- More secure - we can keep sensitive data like API keys on the server.

###### However with server-side rendering we lose interactivity.

- Listen to browser events - like click, change, submit
- Access browser APIs - like Local storage
- Maintain state 
- Use effects
> "These functionalities are only available in client components."
> "So in real world applications we use client and server => default to server components and use client when needed"

### All components inside app folder are server components and rendered on the server