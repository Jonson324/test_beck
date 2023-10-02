class UserController{
    async createUser(req,res){
        const{id,name} =req.body
        console.log(id,name)
        res.json('ok')
    }
    async getUsers(req,res){

    }

}

module.exports = new CarController();