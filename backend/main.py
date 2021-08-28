from flask import Flask, g, request
from flask_cors import CORS
import pymysql
import logging

app = Flask(__name__)
CORS(app)


@app.before_request
def before_request():
    g.db = pymysql.connect(host="localhost", user="root",
                           password="0707", db="portfolio_website", autocommit=True)
    g.cursor = g.db.cursor()


@app.teardown_request
def teardown_request(exception):
    g.db.close()
    g.cursor.close()


@app.route("/api/recommendations", methods=["GET"])
def get_recommendation():
    try:
        # sql query
        query = "SELECT * FROM recommendations WHERE onShowcase=True;"
        g.cursor.execute(query)

        # getting the data
        recommendations = g.cursor.fetchall()
        print(recommendations)

        # processing the data
        results = []
        for recommendation in recommendations:
            recommendation_obj = {
                "id": recommendation[0],
                "name": recommendation[1],
                "company": recommendation[3],
                "designation": recommendation[4],
                "recommendationMessage": recommendation[5],
            }
            results.append(recommendation_obj)

        # returning the results
        return {"isSuccessful": True, "results": results}
    except Exception as e:
        logging.error(e)
        return {"isSuccessful": False, "results": []}


@app.route("/api/skills", methods=["GET"])
def get_skill():
    try:
        query = "SELECT * FROM skills"
        g.cursor.execute(query)
        skills = g.cursor.fetchall()
        print(skills)

        results = []
        for skill in skills:
            skill_obj = {
                "id": skill[0],
                "imageUrl": skill[1],
                "name": skill[2],
                "starsTotal": skill[3],
                "starsActive": skill[4],
            }
            results.append(skill_obj)

        return {"isSuccessful": True, "results": results}
    except Exception as e:
        logging.error(e)
        return {"isSuccessful": False, "results": []}


@app.route("/api/projects", methods=["GET"])
def get_projects():
    try:
        query = "SELECT * FROM projects where isPublished=True ORDER BY lastModified DESC"
        g.cursor.execute(query)
        projects = g.cursor.fetchall()
        print(projects)

        results = []
        for project in projects:
            project_obj = {
                "id": project[0],
                "imageUrl": project[1],
                "title": project[2],
                "excerpt": project[3],
                "body": project[4],
            }
            results.append(project_obj)

            return{"isSuccessful": True, "results": results}
    except Exception as e:
        logging.error(e)
        return {"isSuccessful": True, "results": []}


@app.route("/api/blogs", methods=["GET"])
def get_blogs():
    try:
        query = "SELECT * FROM blogs where isPublished=True ORDER BY lastModified DESC"
        g.cursor.execute(query)
        blogs = g.cursor.fetchall()
        print(blogs)

        results = []
        for blog in blogs:
            blog_obj = {
                "id": blog[0],
                "imageUrl": blog[1],
                "title": blog[2],
                "excerpt": blog[3],
                "body": blog[4],
            }
            results.append(blog_obj)
            return{"isSuccessful": True, "results": results}
    except Exception as e:
        logging.error(e)
        return {"isSuccessful": True, "results": []}
