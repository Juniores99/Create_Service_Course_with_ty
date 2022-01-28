import{Request, Response} from 'express'
import CreateService from './CreateService'


export function CreateCourse(request: Request, response: Response)  {

  CreateService.execute({
    name: "Nodejs",
    educator: "Juniores",
    duration: 10
  })

  CreateService.execute({
    name: "React",
    educator: "Pimp",
})

  return response.send()
}