// JavaScript String Methods

// at(index)
{
    console.log("-> at() Methods")
    let str = "String Methods";
    console.log(str.at(3));
    console.log(str.at(6));
    console.log(str.at(-3));
}

// charAt(index)
{
    console.log("-> charAt() Methods")
    let str = "String Methods";
    console.log(str.charAt(3));
    console.log(str.charAt(-3));
}

// charCodeAt(index)
{
    console.log("-> charCodeAt() Methods")
    let str = "A a";
    console.log(str.charCodeAt(0));
    console.log(str.charCodeAt(2));
}

// concat(str1)
// concat(str1, str2)
{
    console.log("-> concat() Methods")
    let str1 = "String Methods";
    let str2 = "Hello";
    console.log(str1.concat(" ", str1));
    console.log(str2.concat(", ", str));
}

// endsWith(searchString)
// endsWith(searchString, endPosition)
{
    console.log("-> endsWith() Methods")
    let str = "String Methods";
    console.log(str.endsWith("Methods"));
    console.log(str.endsWith("Methods", 14));
}

// includes(searchString)
// includes(searchString, position)
{
    console.log("-> includes() Methods")
    let str = "String Methods";
    console.log(str.includes("String"));
    console.log(str.includes("t", 10));
}

// indexOf(searchString)
// indexOf(searchString, position)
{
    console.log("-> indexOf() Methods")
    let str = "String Methods";
    console.log(str.indexOf("String"));
    console.log(str.indexOf("t", 4));
    console.log(str.indexOf("M", 10));
}

// lastIndexOf(searchString)
// lastIndexOf(searchString, position)
{
    console.log("-> lastIndexOf() Methods")
    let str = "String Methods";
    console.log(str.lastIndexOf("String"));
    console.log(str.lastIndexOf("t"));
}

// padEnd(targetLength)
// padEnd(targetLength, padString)
{
    console.log("-> padEnd() Methods")
    let str = "String Methods";
    console.log(str.padEnd(16," ?"));
    console.log(str.padEnd(20,"."));
}

// padStart(targetLength)
// padStart(targetLength, padString)
{
    console.log("-> padStart() Methods")
    let str = "String Methods";
    console.log(str.padStart("."));
    console.log(str.padStart(20,"."));
}

// repeat(count)
{
    console.log("-> repeat() Methods")
    let str = " String Methods";
    console.log(str.repeat(1));
    console.log(str.repeat(2));
}

// replace(pattern, replacement)
{
    console.log("-> replace() Methods")
    let str = "String Method";
    console.log(str.replace("String","replace"));
}

// replaceAll(pattern, replacement)
{
    console.log("-> replaceAll() Methods")
    let str = ".String Methods.";
    console.log(str.replaceAll(".","-"));
}

// split(separator)
// split(separator, limit)
{
    console.log("-> split() Methods")
    let str = "String Methods";
    console.log(str.split(""));
    console.log(str.split("",6));
}

// startsWith(searchString)
// startsWith(searchString, position)
{
    console.log("-> startsWith() Methods")
    let str = "String Methods";
    console.log(str.startsWith("Str"));
    console.log(str.startsWith("Str",7));
}

// toLowerCase()
{
    console.log("-> toLowerCase() Methods")
    let str = "String Methods";
    console.log(str.toLowerCase(""));
}

// toUpperCase()
{
    console.log("-> toUpperCase() Methods")
    let str = "String Methods";
    console.log(str.toUpperCase(""));
}

// trim()
{
    console.log("-> trim() Methods")
    let str = "   String Methods";
    console.log(str.trim());
}

// trimStart()
// trimLeft()
{
    console.log("-> trimStart() Methods")
    let str = "    String Methods   ";
    console.log(str.trimStart());
}

// trimEnd()
// trimRight()
{
    console.log("-> trimEnd() Methods")
    let str = "String Methods   ";
    console.log(str.trimEnd());
}

// slice(indexStart)
// slice(indexStart, indexEnd)
{
    console.log("-> slice() Methods")
    let str = "String Methods";
    console.log(str.slice(8));
    console.log(str.slice(2,-8));
    console.log(str.slice(-5));
    console.log(str.slice(-8,-6));
}

// substring(indexStart)
// substring(indexStart, indexEnd)
{
    console.log("-> substring() Methods")
    let str = "String Methods";
    console.log(str.substring(7,11));
    console.log(str.substring(-5));
}