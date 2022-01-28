interface Course {
  name: String
  duration?: number
  educator: String
}

class CreateService {


  execute({duration = 8, educator, name}:Course) {
    console.log(name, duration, educator)
  }
}

export default new CreateService()