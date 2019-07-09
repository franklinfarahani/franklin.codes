---
title: Creating CSS Grid Layouts in No Time
date: "2019-06-10"
description: "Learning CSS Grid may be a daunting task to many developers. We discuss the minimum you need to know before you become a Grid believer (Hint: named grid areas!)"
tags: ["CSS-grid", "CSS", "Styling"]
cover: "./css-grid-aha.jpg"
---

## Introduction

CSS Grid is a (relatively) new, powerful, and versatile tool for creating modern layouts. It also has 18 new properties and therefore has a steep learning curve. Or does it?

My reason for writing this article was to demonstrate that not only this is not true, but that you can learn all you need to know to scaffold great UI with Grid, in less than 5 minutes.

I should mention that the goal of this article is not to provide an exhaustive encyclopedic guide to CSS Grid. This is because there are already many resources available online (links at the end) that do this way better than I ever could. I'm hoping however, to help you get up and running with Grid and hopefully understand and appreciate what it can offer along the way.

Also, please note that it might be a good idea to use [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/) when working with CSS Grid, mainly because it can help visualize you grid designs better than other browsers at the moment. This is however not a requirement by any means.

Let's get started.

## The Basics

As you might know, unlike Flex, CSS Grid works on a 2-dimensional system. With Flex, you specify whether you want your container's items to be arranged in a column or a row, and then you can modify properties that move them around that single axis. With Grid however, you are not restricted to just the column or the row and you able to arrange your items along either axis at the same time. 

Grid achieves this by allowing you to specify grid lines for a parent container and then letting you assign locations to its children by declaring the vertical and horizontal start and finish lines for them.

Sounds a bit complicated, doesn't it? Let's take a look:






