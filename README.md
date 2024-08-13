# Santos_website

Files for the Santos Seascape Ecology Lab Website

If you are completely new to Quarto websites, or have not done advanced formatting for a Quarto website, there are a couple of things you need to know to be able to edit the website efficiently (if Hannah-Marie is gone or not available).

First of all, lets start with understanding the file types that are present:

-   **\_quarto.yml file:** This is the main configuration for the website, it will control aspects of the entire website. You typically WILL NOT need to modify this file, unless you want to add a new page to the navbar in the future, or change the name of how a page is appearing in the navbar. DO NOT add a .css style sheet to this website, because each page has its own .css controlled in the front matter and doing so will mess up the entire website.

-   **.qmd files (index, lab_alumni, news, etc):** These files are Quarto Markdown files, these are the individual pages for the website. The index file is the page for the "home" of the website, it will reappear when you click on the website title. DO NOT change the name of this file, it was automatically set up by the powers that be, and needs to be called "index" to be rendered properly. Otherwise, you may change the names of the other .qmd files as you see fit, however I'd recommend against it since I have the site set up with the current names, and you can change how they appear in the "navbar" section of the .yml file.

-   **.css files (styles, home):** These documents are working in conjunction with .qmd files to add styling to each of the pages. It will take whatever text and code is in the .qmd file and format/style it appropriately. If you want to change some formatting for each of the pages, this would be where you would do that. You'll likely have to put what you want to change in HTML within the .qmd though, because it allows for more powerful styling choices than just the typical markdown formatting.

You should go in and view each of these files while also looking at the website, to get a better understanding of how each of these files work together to create the website.

## Now, a couple of FAQs after you look at those documents:

**Why do some .qmd files have a lot of, or are only coded in HTML, while others do not?**

In instances in which I wanted to do advanced formatting, I could not do that in just the plain Quarto Markdown format. Quarto pages are automatically set up with page formatting, such as a [sidebar, body, and margin.](https://quarto.org/docs/output-formats/page-layout.html) Especially for the index page, I did not want it to look like that, so I had to code this entire page in an HTML chunk, and I created a new .css document (home.css) that will do exactly what I want each division (

</div>

) to do. For example, to get the images that I have to be full screen, I had to create divs for that, called "hero image". The HTML is not doing any of the formatting, that is just the layout. On the home.css file, you can see for the first hero image div, I have the right conditions set for it to appear like that.

**Why do some .qmd files have different settings at the top of the page, in between the dashed lines?**

All of the information between the dashed lines of a .qmd file is called the [front matter](https://quarto.org/docs/authoring/front-matter.html). This portion of the file reads in .yml language. It is where you can control page-specific settings without changing the whole website if you were to put that code in the .yml document. As you can see, the "\_quarto.yml" document does not have a lot of settings in it, it's pretty bare bones. That's because I've done a lot of the format and setting changes to individual pages in the frontmatter and .css documents.

**I am completely illiterate when it comes to reading and understanding all of this, how do I get better at it?**

I had a very basic understanding of HTML, limited practice with markdown, and had no practice with CSS. I can't lie, I relied heavily on ChatGPT, but you can only get so far when it gives you a piece of code and you don't know why it's not working how you want it to. Here is my recommended troubleshooting guides:

1.  <https://quarto.org/docs/websites/> (highly recommend. It helped me out a ton!!)

2.  <https://html.com/>

That's pretty much it for what I have!

test 1.

test 2?
