"use strict";$("input").keypress(function(e){13==e.keyCode&&(e.preventDefault(),$("form").submit())});