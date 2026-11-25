# PHP Introduction Tutorial

---

## 1. What is PHP?

PHP stands for **PHP: Hypertext Preprocessor**.

- PHP is an open-source, server-side scripting language.
- It is mainly used for web development.
- PHP is used to create dynamic and interactive websites.
- PHP code executes on the server and generates output that can be sent to the browser.
- PHP can also connect with databases like MySQL.

**Example:** Login systems, registration forms, dynamic websites and content management systems.

## 2. What is a Server-Side Language?

A server-side language is a programming language whose code executes on the server.

In PHP:

1. User sends a request from the browser.
2. Server receives the request.
3. PHP code executes on the server.
4. Server generates the output.
5. Browser displays the response.

## 3. What is a Dynamic Website?

A dynamic website displays content according to user input, database information or other conditions.

**Example:**
- Login and Signup System
- Facebook
- E-commerce Websites
- Student Management System

In a dynamic website, different users can see different information.

## 4. What is a Static Website?

A static website displays fixed content to users.

- Content generally remains the same for every visitor.
- It mainly uses HTML and CSS.
- JavaScript can also add client-side interactivity.

**Example:** A simple portfolio website with fixed information.

## 5. PHP Features

1. **Open Source:** PHP is freely available.
2. **Server-Side:** PHP code executes on the server.
3. **Database Support:** PHP supports databases like MySQL.
4. **Platform Independent:** PHP works on different operating systems.
5. **Easy to Learn:** PHP has beginner-friendly syntax.
6. **Dynamic Websites:** PHP helps create dynamic web applications.

## 6. PHP vs JavaScript

| PHP | JavaScript |
|---|---|
| Primarily server-side | Primarily client-side in browsers |
| Runs on a PHP server/runtime | Runs in browsers and server environments like Node.js |
| Uses `.php` extension | Uses `.js` extension |
| Supports database connectivity | Supports database connectivity through server-side environments |
| Generates dynamic server responses | Handles browser interactions and server-side logic |

**Important:** JavaScript is not limited to frontend development. Node.js allows JavaScript to run on the server.

## 7. What is a PHP File?

A PHP file is a file that contains PHP code.

- PHP files use the `.php` extension.
- PHP code is written inside PHP tags.
- A PHP file can contain HTML and PHP together.

**Example:**

```php
<?php
echo "Hello World!";
?>
```

**Output:**

```text
Hello World!
```

## 8. What is XAMPP?

XAMPP is a free and open-source software package used to create a local web development environment.

XAMPP includes:

- X – Cross Platform
- A – Apache
- M – MariaDB
- P – PHP
- P – Perl

**Apache:** Web server that handles HTTP requests.

**MariaDB:** Relational database management system.

**PHP:** Server-side scripting language.

XAMPP helps developers run PHP projects locally on their computers.

## 9. Where is PHP Used?

- E-commerce websites
- Login and Registration systems
- Content Management Systems (CMS)
- Blog websites
- Database-driven applications
- Dynamic web applications

## 10. Advantages of PHP

- Free and open-source.
- Easy to learn and use.
- Supports multiple databases.
- Large developer community.
- Can be integrated with HTML.
- Works on multiple operating systems.

## 11. Important Interview Questions

**Q1. What is PHP?**

PHP is an open-source server-side scripting language mainly used for web development.

**Q2. What is the full form of PHP?**

PHP: Hypertext Preprocessor.

**Q3. Is PHP frontend or backend?**

PHP is primarily a backend/server-side language.

**Q4. What is the extension of a PHP file?**

`.php`

**Q5. What is XAMPP?**

XAMPP is a software package used to create a local PHP development environment.

**Q6. Can PHP connect to a database?**

Yes, PHP can connect to databases like MySQL and MariaDB.

**Q7. What is the difference between static and dynamic websites?**

A static website generally displays fixed content, whereas a dynamic website can generate different content based on user input or database information.

## 12. Conclusion

PHP is a server-side scripting language used to develop dynamic websites and web applications. It can interact with databases and generate responses based on user requests.

**Next Topic:** Installing XAMPP Server in Windows.


lecture-3

# PHP Basic Code Structure and Syntax

**Topic:** PHP Basic Code Structure  
**Source:** [PHP Basic Code Structure Tutorial](https://youtu.be/eLBDf7U4DfQ)  
**Language:** Hindi / Urdu

---

## 1. Introduction to PHP Syntax

PHP syntax refers to the rules and structure used to write PHP programs.

PHP code is written inside special PHP tags.

**Syntax:**

```php
<?php
    // PHP code goes here
?>
```

**Explanation:**

- `<?php` – PHP opening tag.
- `?>` – PHP closing tag.
- PHP code is written between these tags.
- PHP code executes on the server.

**Note:** In PHP-only files, the closing tag `?>` can be omitted to avoid accidental whitespace output.

## 2. First PHP Program – Hello World

Let's write our first PHP program.

**Code:**

```php
<?php
    echo "Hello World!";
?>
```

**Output:**

```text
Hello World!
```

**Explanation:**

- `echo` is used to display output.
- `"Hello World!"` is a string.
- `;` represents the end of a PHP statement.

## 3. PHP Opening and Closing Tags

PHP code starts with an opening tag and can end with a closing tag.

**Example:**

```php
<?php
    echo "Welcome to PHP";
?>
```

**Important Points:**

1. `<?php` is the opening PHP tag.
2. `?>` is the closing PHP tag.
3. PHP code should be written inside these tags.
4. HTML and PHP can be used together in a PHP file.

## 4. PHP Statements

A statement is an instruction that tells PHP to perform a specific task.

In PHP, most statements end with a semicolon (`;`).

**Example:**

```php
<?php
    echo "Hello";
    echo "Welcome";
    echo "Learning PHP";
?>
```

**Output:**

```text
HelloWelcomeLearning PHP
```

Each `echo` is a separate PHP statement.

## 5. PHP Comments

Comments are used to explain code. They are ignored by the PHP interpreter.

PHP supports three types of comments.

### A. Single-Line Comment

We can use `//` or `#` for single-line comments.

**Example:**

```php
<?php
    // This is a single-line comment

    # This is also a single-line comment

    echo "Hello PHP";
?>
```

### B. Multi-Line Comment

We use `/* */` for multi-line comments.

**Example:**

```php
<?php
    /*
       This is a multi-line comment.
       We can write multiple lines here.
    */

    echo "Welcome to PHP";
?>
```

**Important:** Comments are not displayed in the browser output.

## 6. PHP Case Sensitivity

PHP is partially case-sensitive.

- Variable names are case-sensitive.
- PHP keywords, function names and class names are generally case-insensitive.

**Example:**

```php
<?php
    $name = "Shatrughan";

    echo $name;

    // Variable names are case-sensitive
    // $name and $Name are different variables
?>
```

**Example of keywords:**

```php
<?php
    echo "Hello";
    ECHO "Welcome";
?>
```

Both `echo` and `ECHO` are valid PHP keywords.

## 7. PHP and HTML Together

PHP allows us to write HTML and PHP code in the same file.

**Example:**

```php
<!DOCTYPE html>
<html>
<head>
    <title>PHP Example</title>
</head>
<body>

    <h1>Welcome to My Website</h1>

    <?php
        echo "Hello from PHP!";
    ?>

</body>
</html>
```

**Output in Browser:**

```text
Welcome to My Website

Hello from PHP!
```

**Explanation:**

- HTML creates the webpage structure.
- PHP generates dynamic content.
- The browser receives the generated HTML output.

## 8. Difference Between echo and print

Both `echo` and `print` are used to display output in PHP.

**Using echo:**

```php
<?php
    echo "Hello World";
?>
```

**Using print:**

```php
<?php
    print "Hello World";
?>
```

**Difference:**

| echo | print |
|---|---|
| Language construct | Language construct |
| Can output multiple arguments | Accepts one argument |
| Does not return a value | Returns 1 |
| Commonly used for output | Also used for output |

## 9. PHP File Extension

PHP files use the `.php` extension.

**Examples:**

- index.php
- home.php
- login.php
- register.php
- dashboard.php

PHP files should be executed through a PHP-enabled server environment, such as XAMPP Apache, rather than simply opening them as local files in a browser.

## 10. How to Run Your First PHP Program

Follow these steps:

**Step 1:** Install XAMPP on your computer.

**Step 2:** Start Apache from the XAMPP Control Panel.

**Step 3:** Open the XAMPP installation folder.

**Step 4:** Go to the `htdocs` folder.

**Step 5:** Create a new folder named `php-practice`.

**Step 6:** Create a file named `index.php`.

**Step 7:** Write the following code:

```php
<?php
    echo "My First PHP Program";
?>
```

**Step 8:** Open your browser and enter:

```text
http://localhost/php-practice/index.php
```

**Output:**

```text
My First PHP Program
```
# PHP Echo and Print Statements

**Topic:** PHP Echo & Print Statement  
**Source:** [PHP Echo & Print Tutorial](https://youtu.be/V9c2M7c5xqU)  
**Language:** Hindi / Urdu

---

## 1. Introduction to Echo and Print

In PHP, `echo` and `print` are used to display output on the browser.

Both are language constructs, not ordinary functions.

**Main Purpose:**
- Display text.
- Display variables.
- Display HTML content.
- Display dynamic output.

## 2. What is Echo in PHP?

**Definition:** Echo is a PHP language construct used to display one or more strings or values as output.

**Syntax:**

```php
echo "Hello World!";
```

**Example:**

```php
<?php
    echo "Hello World!";
?>
```

**Output:**

```text
Hello World!
```

**Explanation:**
- `echo` is used to display output.
- `"Hello World!"` is the string.
- `;` indicates the end of the statement.

## 3. Display Multiple Strings Using Echo

Echo can display multiple arguments separated by commas.

**Example:**

```php
<?php
    echo "Hello", " ", "World!";
?>
```

**Output:**

```text
Hello World!
```

We can also use the concatenation operator (`.`) to join strings.

**Example:**

```php
<?php
    echo "Hello" . " " . "World!";
?>
```

**Output:**

```text
Hello World!
```

**Note:** Echo does not automatically add spaces or new lines between values.

## 4. What is Print in PHP?

**Definition:** Print is a PHP language construct used to display a single string or value as output.

**Syntax:**

```php
print "Hello World!";
```

**Example:**

```php
<?php
    print "Hello World!";
?>
```

**Output:**

```text
Hello World!
```

**Explanation:**
- `print` displays output on the browser.
- It accepts one argument.
- It returns the value `1`.

## 5. Display Variables Using Echo

We can use echo to display the values stored in variables.

**Example:**

```php
<?php
    $name = "Shatrughan";
    $age = 22;

    echo $name;
    echo $age;
?>
```

**Output:**

```text
Shatrughan22
```

If we want proper spacing, we can use concatenation.

```php
<?php
    $name = "Shatrughan";
    $age = 22;

    echo "My name is " . $name . " and my age is " . $age;
?>
```

**Output:**

```text
My name is Shatrughan and my age is 22
```

## 6. Display Variables Using Print

We can also use print to display variable values.

**Example:**

```php
<?php
    $name = "Shatrughan";

    print $name;
?>
```

**Output:**

```text
Shatrughan
```

We can also use concatenation with print.

```php
<?php
    $name = "Shatrughan";

    print "Welcome " . $name;
?>
```

**Output:**

```text
Welcome Shatrughan
```

## 7. Echo vs Print

Both echo and print are used to display output, but they have some differences.

| Echo | Print |
|---|---|
| Used to display output | Used to display output |
| Can accept multiple arguments | Accepts only one argument |
| Does not return a value | Returns 1 |
| Generally used for output | Also used for output |
| Cannot be used as an expression | Can be used as an expression |

**Example of Echo:**

```php
<?php
    echo "Hello", " ", "PHP";
?>
```

**Example of Print:**

```php
<?php
    print "Hello PHP";
?>
```

## 8. Using HTML with Echo

We can also display HTML elements using echo.

**Example:**

```php
<?php
    echo "<h1>Welcome to PHP</h1>";
    echo "<p>Learning PHP is easy.</p>";
?>
```

**Output in Browser:**

A heading displaying:

Welcome to PHP

A paragraph displaying:

Learning PHP is easy.

**Explanation:**
- PHP generates HTML output.
- The browser renders the generated HTML.
- This helps us create dynamic webpages.

## 9. Using HTML with Print

We can also generate HTML using print.

**Example:**

```php
<?php
    print "<h1>Hello World</h1>";
    print "<p>This is PHP tutorial.</p>";
?>
```

**Output in Browser:**

Hello World (as a heading)

This is PHP tutorial. (as a paragraph)

## 10. Difference Between Echo and Print with Example

```php
<?php

    // Using Echo
    echo "Hello World";

    echo "<br>";

    // Using Print
    print "Welcome to PHP";

?>
```

**Output:**

```text
Hello World
Welcome to PHP
```

Here, `<br>` is an HTML line-break tag used to display the second output on a new line.

## 11. Important Points to Remember

1. Echo and print are used to display output in PHP.
2. Both are language constructs.
3. Echo can accept multiple arguments.
4. Print accepts only one argument.
5. Echo does not return a value.
6. Print returns `1`.
7. Both can display strings and variables.
8. Both can generate HTML output.
9. PHP statements generally end with a semicolon (`;`).
10. The concatenation operator (`.`) joins strings in PHP.

