# Evaluate_News_Article_1_Udacity
# Description
Evaluate a News Article with Natural Language Processing(NLP) using Meaning Cloud
The page allows users to run (NLP) on articles or blogs found on other website ,and show the user various attributes of an article or blog post.
*NLP is the ability of an application to understand the human language, written or oral.*

# project prerequisites:
Build tool - Webpack. 
External script - Service Worker
External API - Meaning Cloud

# Development Mode
- Working on styles using style-loader node-sass css-loader sass-loader.
- Working on Checking Url valid or not using valid-url package
- Event Listener on Form Submit
- Send URL to Meaning cloaud API 
- Wait for API response , Then show it on HTML

# Production Mode
- Server Configuration
- Optimization using :
-                 mini-css-extract-plugin 
-                 optimize-css-assets-webpack-plugin 
-                 terser-webpack-plugin

# Test 
- Test Definition of handleSubmit , CheckUrl
- Test functionality of ChechUrl 
*test Using jest*

#functionality 
- User must Enter a valid URL like  ((https://www.google.com/__))
- The expected resulty presented under the form in the same page 

# URL Checker 
- check for a URL and give back helpful error messages for the User like :
	The URL missing https:// Protocol
	The URL missing Domain name
	The URL missing port or path