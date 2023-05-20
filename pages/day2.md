# day2

___

###### Install Node.js & optional tooling

___

## Index of contents

- [Rust and Fast Node Manager(fnm)](#rust--fast-node-managerfnm)
  - [Rust installation](#rust-installation)
  - [Fast Node Manager](#fast-node-manager)
  - [Fast Node Manager (fnm) Installation](#fast-node-manager-fnm-installation)
    - [Using cargo and manual setup](#using-cargo-and-manual-setup)
    - [Automatic installation script](#automatic-installation-script)
    - [Install Node.js using fnm]()
  - [Install node.js](#install-nodejs)
  - [Run Node.js as root isn't wise](#run-nodejs-as-root-isnt-wise)


### Rust & Fast Node Manager(fnm)

If you do not wish to install these optional packages, skip it to [here.](#install-nodejs)

The best way to install Node.js is  
to have a <u>Node.js version manager</u> application that downloads the proper architecture for the OS we’re using.  
I think, due to its multi-platform nature, using a Rust program is the best solution for every Operating System.  

> One more thing, running Node.js as [`root` isn't wise](#run-nodejs-as-root-isnt-wise).

Let’s install first **Rust** and then **fnm**

#### Rust installation

It’s straight-forward,[^2]  
- head over [here](https://www.rust-lang.org/tools/install),  
- yank the installation script,
- paste it in your terminal and,
- press `return`.

This command will install:

- rustup
- rust compiler
- cargo

For the command completion:[^1]

```shell
mkdir -p ~/.local/share/bash-completion/completions
rustup completions bash >> ~/.local/share/bash-completion/completions/rustup #completion for rustup
rustup completions bash cargo >> ~/.local/share/bash-completion/completions/cargo # completions for cargo
```

##### Rust installation on Fedora 38

This command will install rust, cargo and all dependencies plus the completions for cargo.

```shell
sudo dnf install rust cargo
```

#### Fast Node Manager

Fast Node Manager (FNM) is a command-line tool designed to simplify the management of Node.js versions on your computer.  
It allows developers to switch between different versions of Node.js without manually installing or uninstalling them.

FNM provides a streamlined workflow by enabling developers to specify the desired Node.js version for their projects,
ensuring compatibility and ease of development.

With FNM, developers can efficiently manage Node.js environments
and leverage the features and improvements of different Node.js versions with minimal effort.

#### Fast Node Manager (fnm) Installation

Now, you've Rust installed, proceed with the installation of fnm.

##### Using cargo and manual setup

```shell
cargo install fnm
```

> ⚠ make sure `$HOME/.cargo/bin` is your $PATH

execute the command below to add to `.bash_profile` fnm environment variable.[^1]

```shell
echo $'#fnm\neval "$(fnm env --use-on-cd)"' >> .bash_profile
```

For the command completion:[^1]

```shell
fnm completions --shell bash >> ~/.local/share/bash-completion/completions/fnm
```

Then close and reopen the terminal. 

##### Automatic installation script

Automated script[^2]

```shell
curl -fsSL https://fnm.vercel.app/install | bash
# based on the current user shell, defined in $SHELL
```

##### Install Node.js using fnm

```shell
fnm install 20.2.0
fnm use 20.2.0
fnm default 20.2.0 
```

With these three commands, we’re installing Node.js v20.2.0.  
“Telling” fnm to use the specified version and to set it as our default Node.js.

```shell
node -v
npm -v
```

To check if everything is in place.

___

### Install Node.js

> So, you didn't like to install rust toolchain uh?

Let’s install Node.js the hard way, shall we?  
I assume you aren't logged as a root user, and your Operating System is Linux.[^1]

First of all, you’ll need to head to this [link](https://nodejs.org/dist/v20.2.0/)  
and memorize, not download, the right version of Node.js for your system.

In my case, this is the link to the proper version for my system:

https://nodejs.org/dist/v20.2.0/node-v20.2.0-linux-arm64.tar.gz

```shell
mkdir ~/.node && cd ~/.node
curl https://nodejs.org/dist/v20.2.0/node-v20.2.0-linux-arm64.tar.gz --output node.tar.gz
tar -xf node.tar.gz
mv node-v20.2.0-linux-arm64/* ./
rm -f node.tar.gz
rm -rf node-v20.2.0-linux-arm64
echo $'#node\nexport PATH="~/.node/bin:$PATH"' >> .bash_profile 
sudo ln -s ~/.node/bin/node /usr/bin/node
```

Verify that everything works.

```shell
node -v
npm -v
```

___

### Run Node.js as root isn't wise

- Security risks:  
  running Node.js as the root user grants extensive privileges, which poses a significant security risk.  
  If an attacker gains control over a Node.js process running as root, 
  they can execute malicious code with full system access, compromising the entire system.

- Limited isolation:  
  Node.js applications should ideally be run with limited privileges to isolate them from other system processes.  
  By running Node.js as root, there is no separation between the application and the system,
  increasing the risk of unintended interactions and potential vulnerabilities.

- File system access:  
  Node.js processes running as root have unrestricted access to the entire file system.  
  This means
  that any file or directory accessible by the root user can be modified or deleted by the Node.js application,  
  leading to unintended consequences or potential data loss.

- Package dependencies:  
  When running Node.js applications, you often rely on external packages and libraries.  
  Installing these packages as the root user can introduce security vulnerabilities,  
  as malicious packages can compromise the system.

- Best practices:  
  Following security best practices involves running applications with the fewest privileges necessary.  
  Running Node.js as a non-root user provides an extra layer of security  
  and limits the potential damage that could be caused by a compromised application.

To ensure the security of your system,  
it’s recommended to run Node.js applications with a dedicated user account that has limited privileges,  
granting only the necessary permissions for the application to function correctly.

___

For today, it’s enough.

Go to day three, from the kinda pagination below, when ready.

___

KINDA OF PAGINATION (GitHub)  
ℹ on the blog post it will be filled with links to blog posts and not to GitHub, just so you know.

[introduction](https://github.com/ominesledlooopp/typescript-function-overloading#readme/)
|**[day two](https://github.com/ominesledlooopp/typescript-function-overloading/blob/main/pages/day2.md)**
|[]()

___

>Just foot-notes guys, nothing else. Snoop around if you wish, I know you do.

[^1]: macOS is uncovered
[^2]: automation scripts work differently from a system to another.

___