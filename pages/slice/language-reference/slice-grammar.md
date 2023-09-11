---
title: Slice grammar
---

TODO put some words here

## Grammar elements

TODO maybe put words here too?

### Slice files

```ebnf {% showTitle=false %}
SliceFile
    : SliceFilePrelude Module? Definition*
    ;

SliceFilePrelude
    : EMPTY
    | SliceFilePrelude FileCompilationMode
    | SliceFilePrelude FileAttribute
    ;

FileCompilationMode
    : "mode" "=" Identifier
    ;

Module
    : Prelude "module" RelativeIdentifier
    ;

Definition
    : Struct | Class | Exception | Interface | Enum | CustomType | TypeAlias
    ;
```

### Primitive types

```ebnf {% showTitle=false %}
Primitive
    : "bool"      | "int8"  | "uint8"  | "int16"    | "uint16"    | "int32"   | "uint32"  | "varint32"
    | "varuint32" | "int64" | "uint64" | "varint62" | "varuint62" | "float32" | "float64" | "string"
    | "AnyClass"
    ;
```

### Collection types

```ebnf {% showTitle=false %}
Sequence
    : "sequence" "<" TypeRef ">"
    ;

Dictionary
    : "dictionary" "<" TypeRef "," TypeRef ">"
    ;
```

### Struct types

```ebnf {% showTitle=false %}
Struct
    : Prelude "compact"? "struct" Identifier "{" UndelimitedList<Field> "}"
    ;

Field
    : Prelude Tag? Identifier ":" TypeRef
    ;
```

### Class types

```ebnf {% showTitle=false %}
Class
    : Prelude "class" Identifier CompactId? (":" TypeRef)? "{" UndelimitedList<Field> "}"
    ;

CompactId
    : "(" SignedInteger ")"
    ;

Field
    : Prelude Tag? Identifier ":" TypeRef
    ;
```

### Exceptions

```ebnf {% showTitle=false %}
Exception
    : Prelude "exception" Identifier (":" TypeRef)? "{" UndelimitedList<Field> "}"
    ;

Field
    : Prelude Tag? Identifier ":" TypeRef
    ;
```

### Interface types

```ebnf {% showTitle=false %}
Interface
    : Prelude "interface" Identifier (":" NonEmptyCommaList<TypeRef>)? "{" Operation* "}"
    ;
```

### Operations

```ebnf {% showTitle=false %}
Operation
    : Prelude "idempotent"? Identifier "(" UndelimitedList<Parameter> ")" ("->" ReturnType)? ExceptionSpecification?
    ;

Parameter
    : Prelude Tag? Identifier ":" "stream"? TypeRef
    ;

ReturnType
    : Tag? "stream"? TypeRef
    | "(" UndelimitedList<Parameter> ")"
    ;

ExceptionSpecification
    : "throws" TypeRef
    | "throws" "(" NonEmptyCommaList<TypeRef> ")"
    ;
```

### Enum types

```ebnf {% showTitle=false %}
Enum
    : Prelude "unchecked"? "enum" Identifier (":" TypeRef)? "{" UndelimitedList<Enumerator> "}"
    ;

Enumerator
    : Prelude Identifier ("=" SignedInteger)?
    ;
```

### Custom types

```ebnf {% showTitle=false %}
CustomType
    : Prelude "custom" Identifier
    ;
```

### Type aliases

```ebnf {% showTitle=false %}
TypeAlias
    : Prelude "typealias" Identifier "=" TypeRef
    ;
```

### Type references

```ebnf {% showTitle=false %}
TypeRef
    : LocalAttribute* TypeRefDefinition "?"?
    ;

TypeRefDefinition
    : Primitive | Sequence | Dictionary | RelativeIdentifier | GlobalIdentifier
    ;
```

### Identifiers

```ebnf {% showTitle=false %}
Identifier
    : identifier
    ;

RelativeIdentifier
    : identifier ("::" identifier)*
    ;

GlobalIdentifier
    : ("::" identifier)+
    ;
```

### Tags

```ebnf {% showTitle=false %}
Tag
    : "tag" "(" SignedInteger ")" 
    ;
```

### Integer literals

```ebnf {% showTitle=false %}
Integer
    : integer_literal
    ;

SignedInteger
    : Integer
    | "-" Integer
    ;
```

### Attributes

```ebnf {% showTitle=false %}
FileAttribute
    : "[[" Attribute "]]"
    ;

LocalAttribute
    : "[" Attribute "]"
    ;

Attribute
    : RelativeIdentifier ("(" CommaList<AttributeArgument> ")")?
    ;

AttributeArgument
    : string_literal | identifier
    ;
```



## Syntactic grammar



## Lexical grammar