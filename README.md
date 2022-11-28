My sister-in-law wanted a website to start her own coaching/mentoring business, so I volunteered to make a portfolio website for her.

Firstly, we went through a lot of sample websites to decide the base theme of the project. We came across johngreenbooks.com, which looked so minimalistic and neat, and was well suited with her initial requirements.

I started inspecting the website and was going through the css used in the website, using devTools to catch sight of on hover css animations and transitions. I really didn't like the html structure of the website so I decided to have a my own proper semantic structure for the website. Something I learned from an HTML course. With the likes of aside, article, main, section, heading tags, paragrahs, etc.

I really wanted to have my own re-usable components so I liked the idea of using styled components with proper html tags to create components.

In this project I wanted to focus on the structure of the code more than anything.
  1. _app.tsx contains the common layout container for the entire website that includes an aside component that dynamically changes as per the route along      with navbar inside a header component
