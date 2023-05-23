# day3

___

###### Just chatting

___

## Index of contents

- [Rust](#rust)
  - [The history of Rust](#the-history-of-rust)
  - [Key developers](#key-developers)
- [Similitude with TypeScript](#similitude-with-typescript)
  - [Similarities](#similarities)
  - [Notable Differences](#notable-differences)
- [TypeScript & Rust Syntax](rust.md)

___

## Rust

Rust is a modern systems programming language that was developed with a focus on safety, concurrency and performance.  
It was initially started as a personal project by Mozilla employee Graydon Hoare in 2006.  
The project was later sponsored by Mozilla Research, and development on Rust continued with the involvement of a growing community.

### The history of Rust

###### It can be divided into three major phases:

- **Pre-1.0**:  
  The early years of Rust were focused on exploring ideas and developing the language's core concepts.  
  The language went through several iterations and redesigns during this period.  
  It was developed as a response to the limitations and challenges of existing systems programming languages like C and C++.  
  The goal was to create a language that would give memory safety guarantees while still allowing for low-level control and high performance.


- **1.0 Release**:  
  Rust reached a major milestone with its `v1.0` release, which occurred on May 15, 2015.  
  The `v1.0` release marked the stabilization of the language, with a commitment to backward compatibility.  
  It was an important step in establishing Rust as a production-ready language and attracting a broader audience.


- **Post-1.0**:  
  After the `v1.0` release, Rust's popularity continued to grow, attracting developers from various backgrounds.  
  The language's unique features, such as ownership, borrowing and lifetimes, made it appealing for systems programming tasks where memory safety and concurrency are critical.  
  The Rust community expanded, and many libraries, frameworks and tools were developed to support Rust development.

### Key developers:

###### Graydon Hoare, Mozilla, Steve Klabnik & community

- **Graydon Hoare**:  
  Graydon Hoare is the original creator of Rust.  
  He started the project in 2006 and worked on it extensively during its early years.  
  His vision and initial work laid the foundation for the language.


- **Mozilla Research**:  
  Mozilla Research sponsored the development of Rust and provided resources to support its growth.  
  They played a significant role in shaping the language and promoting its adoption.


- **Steve Klabnik**:  
  Steve Klabnik is a prominent member of the Rust community and has contributed significantly to the language's documentation and ecosystem.  
  He played a crucial role in popularizing Rust and making it more accessible to developers.


- **The Rust Community**: 
  Rust's development is driven by a vibrant and active community of contributors.  
  Many individuals from the community have made valuable contributions to the language, its tooling, and the ecosystem as a whole.

It's important to note that the Rust project is open source and community-driven.  
The development and evolution of Rust involve contributions from a diverse group of developers worldwide.  
The Rust project has a governance structure in place to ensure community involvement and decision-making.

___

### Similitude with TypeScript

Rust and TypeScript are two programming languages that share some similarities but also have distinct characteristics.  

#### Similarities:

- Type Systems:  
  Both `Rust` and `TypeScript` have strong static type systems.  
  They give compile-time type checking, which helps catch type-related errors early in the development process and improves code reliability.


- Safety:  
  Both languages emphasise safety in different ways.  
  `Rust`'s focus on memory safety, ownership and borrowing allows it to prevent common issues like null pointer dereferences and data races.  
  `TypeScript` enhances safety by providing optional static typing and catching common JavaScript mistakes during compilation.


- Tooling:  
  Both languages have robust tooling ecosystems.  
  `Rust` has Cargo, its package manager and build system, which simplifies dependency management and provides a smooth development experience.  
  `TypeScript` has TypeScript Compiler (tsc), which transpiles TypeScript code into JavaScript, enabling usage in any JavaScript environment.

#### Notable differences:

- Language Purpose:  
  `Rust` is primarily designed for systems programming, where performance, control and low-level access are crucial.  it's often used for tasks such as writing operating systems, device drivers or performance-critical components.  
  `TypeScript` is a superset of JavaScript and is mainly used for web development, particularly in building large-scale applications.


- Memory Management:  
  `Rust` has a unique ownership system that enforces strict rules about ownership, borrowing and lifetimes.  
  This system eliminates common memory-related bugs at compile-time, such as dangling pointers or data races.  
  `TypeScript`, being a higher-level language, relies on garbage collection to manage memory automatically.

- Concurrency:  
  `Rust` has built-in support for a safe concurrency with its ownership and borrowing model, which ensures thread safety without the need for locks or explicit synchronisation.  
  `TypeScript`, as a language running on JavaScript engines, relies on JavaScript's asynchronous programming model using Promises or async/await for handling concurrency.

- Performance:  
  `Rust` prioritises performance and control over resource usage.  
  It allows developers to write low-level, efficient code using features like zero-cost abstractions and manual memory management.  
  `TypeScript`, being a higher-level language, sacrifices some performance for developer productivity and ease of use.

###### In summary, 

While both `Rust` and `TypeScript` have strong type systems and offer safety benefits,  
<u>they differ in their primary use cases</u>, _memory management approaches, concurrency models and performance characteristics_.  
Choosing between them depends on the specific requirements and constraints of the project at hand.

___

KINDA OF PAGINATION (GitHub)  
ℹ on the blog post it will be filled with links to blog posts and not to GitHub, just so you know.

[introduction](https://github.com/ominesledlooopp/typescript-function-overloading#readme/)
| [day two](https://github.com/ominesledlooopp/typescript-function-overloading/blob/main/pages/day2.md)
| **[day three](https://github.com/ominesledlooopp/typescript-function-overloading/blob/main/pages/day3.md)**
| [day four](https://github.com/ominesledlooopp/typescript-function-overloading/blob/main/pages/day4.md)
| []()

___

>Just foot-notes guys, nothing else. Snoop around if you wish, I know you do.



___