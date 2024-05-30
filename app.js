const express = require("express");
const controllers = require("./api.controllers");


const app = express();

app.get("/api/topics", controllers.getTopics);
app.get("/api", controllers.getApiHelp);
app.get("/api/articles/:article_id", controllers.getArticlesParamId);
app.get("/api/articles", controllers.getArticles);
app.get("/api/articles/:article_id/comments", controllers.getCommentsByArticle);

// error handlers
app.use(controllers.handlePostgresErrors);
app.use(controllers.handleCustomErrors);


module.exports = app;
