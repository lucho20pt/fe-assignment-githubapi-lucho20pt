import React from 'react'
import { Link } from 'react-router-dom'
import classes from 'styles/pages/About.module.scss'

const About = () => {
  return (
    <section className="content">
      <h1 className="title text-center">About the app</h1>
      <article className={classes.about}>
        <h2>About the challenge</h2>
        <p>
          In this challenge, you should be able to write a React app using
          whatever tools you want.
        </p>

        <hr />

        <h2>What you are building</h2>
        <p>
          You will be building a simple React app to search for Github users and
          display their information.
        </p>
        <p>You will be using the Github API.</p>

        <ul>
          <li>
            <h3>It will consist of two pages:</h3>
          </li>
          <li>
            <strong>The search page</strong> - It needs to have at least one
            input to type the Github username you want to search for and a
            button that will trigger the search.
          </li>
          <li>
            <strong>The user page</strong> - A page to display the user
            information and repositories. It will need a button to go back to
            the Search page.
          </li>
          <li>
            <h3>User information to display:</h3>
            <ul>
              <li>Profile picture</li>
              <li>Name</li>
              <li>Total number of repositories</li>
              <li>List of repositories (repository name and description)</li>
            </ul>
          </li>
        </ul>
        <p>
          You’re free to implement your own design or you can mimic/get ideas
          from the existing one in Github.
        </p>

        <hr />

        <h2>What we will look at</h2>
        <ul>
          <li>How do you work with HTML, CSS, JS, and React</li>
          <li>How you structure your codebase and how well it reads</li>
          <li>How well it works</li>
        </ul>

        <hr />

        <h2>
          <u>What you can’t use</u>
        </h2>
        <p>
          A UI library with stylized components/classes ready to use like
          Bootstrap, Material UI, Tailwind, ChakraUI, etc. You can still use
          libraries like styled-components or use SASS to create your styles; we
          just want to see how you'll structure your CSS code to achieve
          something (however simple).
        </p>

        <hr />

        <h2>How long it should take</h2>
        <p>
          As little as possible (we estimate a few days part-time). But be aware
          that the deadline for this coding challenge is 7 days. If you need
          some extra time, don't hesitate to contact us.
        </p>

        <hr />

        <h2>What it must have</h2>
        <ul>
          <li>
            A well-explained Readme on how to start the project, a description,
            and any decisions you made that may be relevant
          </li>
          <li>Tests</li>
          <li>A public repository on Github or other similar platforms</li>
        </ul>
      </article>

      <p className="centered">
        <Link className="btn" to="/">
          Return to Home
        </Link>
      </p>
    </section>
  )
}

export default About
