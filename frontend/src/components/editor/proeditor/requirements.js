
import {
  SiPython,
  SiC,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiRuby,
  SiGo,
  SiCsharp,
  SiPhp,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export const LANGUAGE_VERSIONS = {
  python: "3.10.0",
  java: "15.0.2",
  c: "10.2.0",
  cpp: "10.2.0",
  javascript: "18.15.0",
  typescript: "5.0.3",
  ruby: "3.0.1",
  go: "1.16.2",
  csharp: "6.12.0",
  php: "8.2.3",
};

export const CODE_SNIPPETS = {
  python: `\ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Alex")\n`,
  java: `\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
  c: `\n#include <stdio.h>\nvoid greet(char* name) {\n\tprintf("Hello, %s!", name); \n}\nint main() {\n greet("John");\n return 0; \n}\n`,
  cpp: `\n#include <iostream>\nvoid greet(std::string name) {\n\t std::cout << "Hello, " << name << "!"; \n}\nint main() {\n greet("Alice"); \nreturn 0; \n}\n`,
  javascript: `\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Alia");\n`,
  typescript: `\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "Jacob" });\n`,
  ruby: `\ndef greet(name) puts "Hello, #{name}!" end\ngreet("Rams")\n`,
  go: `\npackage main\nimport "fmt"\nfunc greet(name string) {\n\t fmt.Printf("Hello, %s!", name) \n}\nfunc main() {\n\t greet("Johns") \n}\n`,
  csharp:
    'using System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World in C#");\n\t\t}\n\t}\n}\n',
  php: "<?php\n\n$name = 'Ali';\necho $name;\n",
};

export const LANGUAGE_ICONS = {
  python: <SiPython />,
  java: <FaJava />,
  c: <SiC />,
  cpp: <SiCplusplus />,
  javascript: <SiJavascript />,
  typescript: <SiTypescript />,
  ruby: <SiRuby />,
  go: <SiGo />,
  csharp: <SiCsharp />,
  php: <SiPhp />,
};
