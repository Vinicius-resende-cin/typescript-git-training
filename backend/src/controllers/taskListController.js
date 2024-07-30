const taskList = require('../models/taskListData');

module.exports = {

    async read(request, response){
        const tasks = await taskList.find();

        return response.json(tasks);
    },

    async create(request, response){
        const {task, index} = request.body;

        if (!task || typeof index !== 'number') {
            return response.status(400).json({error: "Necessário uma task e um index!"});
        }
        const taskCreated = await taskList.create({
            task,
            index
        });

        return response.json(taskCreated);
    },

    async delete(request, response){
        const {id} = request.params;

        const taskDeleted = await taskList.findOneAndDelete({_id : id});

        if (!taskDeleted){
            return response.status(204).json({error: "Não foi encontrado a task para deletar!"});
        }else{
            return response.json(taskDeleted);
        }
    }
}
