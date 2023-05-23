# Typescript function overloading

___

###### Biting around types & function overloading in Typescript

___

## Index of content

- [Greetings and introduction](#greetings-and-introduction)
- [Pre-requisites](#pre-requisite)
- [Behind the scenes](#behind-the-scenes)
- [Brief about topics](#brief-about-topics)
- [JetBrains OSS Licence](pages/jetbrains.md)

___

## Greetings and introduction

Hello again folks!
It has passed a while since my “very” first post[^1], many things have happened, and a lot of new things I’ve learnt.

I want to introduce you a series of blog posts where you’re going to be my companions during my understanding of
Typescript types and function overloading.

I decided to write a series to do not publish a forever to read post,  
so it will be possible to read and breathe at the same time.

This is a tiny repository in source code, but it may be a bootstrap environment for every Typescript project.  
Lightweight and fast.

What I’m trying to understand, specifically, is how `d.ts` files work in published packages.  
In fact, the project of these blogs uses verdaccio[^2] to have a local registry and see in real time the behaviour  
of the module, `amazing-types` ~~(subject of this very project)~~, in conjunction with `d.ts` files,  
without publishing “crap” on official npmjs registry.

## Pre-requisite

It runs on Linux and macOS but **not on _Windows_**,  
because there is a Node.js `devDependencies` that won't run on that platform.  
Another reason to publish these articles is that I want to show you an app that I'm developing,
the classic “side project,” but I’ll talk about it later on.

Before to get started, let’s see what it’s a must to have installed on the system, and then proceed step by step.

- Node.js **[required]**[^3]

> Yes, sad but true, just like that.

The optional things below are just something...

> Good to know they exist.

- Rust **[optional]**[^4]
- Fast Node Manager _(Node version manager written in rust)_ AKA `fnm` **[optional]**[^5]
- LunarVim **[optional]**[^6]

### Behind the scenes

After cloning the dedicated repository,  
you’ll notice that there are some shell scripts in the directory `shell_scripts`.

> What do they do?

- Install globally two necessary packages:
  - `verdaccio` npmjs official registry `savior`.
  - `pm2` great to run in background `verdaccio`.
  >⚠ if you’ve these two packages already installed please keep in mind  
  >  that the magic script `auto.sh` will remove them from your system.  
  >  so, try to play this game in a clean environment, like a Virtual Machine?  
  >  yeah.
- Initialise our project.
- reset everything from git repository (I guess you’ll clone this rep, right? RIGHTTT???) and globally installed packages and so on...

I will explain everything, remember this is “THE Koolthings SERIIIIEEES!”

### Brief about topics

- Typescript.
- Typescript definition `d.ts` files and functions overloading.
- Private Node.js packages repository.
- npm useful commands.
- UNIT tests.
- Shell script to automate things (koolthing).
- Integrated Development Environments and Intellisense.
- Writing useful DocComments and when not needed.
- eslint rules.
- LunarVim.
- “Just chatting.”

___

KINDA OF PAGINATION (GitHub)  
ℹ on the blog post it will be filled with links to blog posts and not to GitHub, just so you know.

**[introduction](https://github.com/ominesledlooopp/typescript-function-overloading#readme/)**
| [day two](https://github.com/ominesledlooopp/typescript-function-overloading/blob/main/pages/day2.md)
| [day three](https://github.com/ominesledlooopp/typescript-function-overloading/blob/main/pages/day3.md)
| [day four](https://github.com/ominesledlooopp/typescript-function-overloading/blob/main/pages/day4.md)
| []()

___

>Just foot-notes guys, nothing else. Snoop around if you wish, I know you do.

[^1]: [Symbol-Help](https://dev.to/simonedelpopolo/symbol-help-a-simple-shell-application-2ep7)
[^2]: [verdaccio](https://verdaccio.org)
[^3]: [node.js](https://nodejs.org)
[^4]: [rust](https://www.rust-lang.org)
[^5]: [fnm](https://github.com/Schniz/fnm)
[^6]: [lunarvim](https://www.lunarvim.org)

___