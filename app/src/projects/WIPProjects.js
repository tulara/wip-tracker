import React from "react"

import ProjectList from "./ProjectList"
import NewProjectButton from "./NewProjectButton"

import AddButton from "../components/AddButton"

import { useQuery, useMutation } from "@apollo/react-hooks"
import gql from "graphql-tag"

const GET_PROJECTS = gql`
  query getAllProjects {
    projects {
      id
      name
      recipient
      image
    }
  }
`

const REMOVE_PROJECT = gql`
  mutation removeProject($id: String!) {
    removeProject(id: $id)
  }
`

const SAVE_NEW_PROJECT = gql`
  mutation saveProject($name: String!, $recipient: String) {
    saveProject(name: $name, recipient: $recipient) {
      id
      name
      recipient
    }
  }
`

const WIPProjects = () => {
  const { data } = useQuery(GET_PROJECTS)
  console.log(data)

  const [saveProject] = useMutation(SAVE_NEW_PROJECT, {
    refetchQueries: [
      {
        query: GET_PROJECTS,
      },
    ],
    update(cache, { data: { saveProject } }) {
      const { projects } = cache.readQuery({ query: GET_PROJECTS })
      cache.writeQuery({
        query: GET_PROJECTS,
        data: { projects: projects.concat([saveProject]) },
      })
    },
  })

  const [removeProject] = useMutation(REMOVE_PROJECT, {
    update(cache, { data: { removeProject } }) {
      console.log(removeProject)
      const { projects } = cache.readQuery({ query: GET_PROJECTS })
      cache.writeQuery({
        query: GET_PROJECTS,
        data: { projects: projects.filter((p) => p.id !== removeProject) },
      })
    },
  })

  const removeProjectById = (id) => {
    console.log(`removing item with id ${id}`)
    // stupid apollo structure
    removeProject({ variables: { id } })
  }

  return (
    <>
      <section className="section has-text-centered">
        <h1 className="title has-text-centered">Stash</h1>
        <NewProjectButton saveProject={saveProject} />
        <AddButton onClick={saveProject} />
      </section>
      <section className="section">
        {data && data.projects && (
          <ProjectList
            projects={data.projects}
            removeProject={removeProjectById}
          />
        )}
      </section>
    </>
  )
}

export default WIPProjects
