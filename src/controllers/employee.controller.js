const conectionDB = require('../db');

module.exports.getEmployees = async (req, res) => {
    const [getResult] = await conectionDB.query('select * from personEmployee');
    res.send(getResult);
};
module.exports.getEmployee = async (req, res) => {
    const {id} = req.params;
    const [getResult] = await conectionDB.query('select * from personEmployee where id = ?', [id]);
    if(getResult.length <= 0) return res.status('404').json({
        message: 'no se encontro el id'
    })
    res.send(getResult[0]);
};
module.exports.postEmployee = async (req, res) =>{
    try{
        const {name, edad, profesion} = req.body;
        if(name, edad, profesion){
            const [postEmployee] = await conectionDB.query('insert into personEmployee (name, edad, profesion) value (?,?,?)', [name, edad, profesion]);
            res.send(postEmployee);
        } else{
            res.send('faltan datos');
        }
    } catch(error){
        res.status(500).json('error');
    }
};
module.exports.putEmployee = async (req, res) =>{
    try{
        const {id} = req.params;
        const {name, edad, profesion} = req.body;
        if(name, edad, profesion){
            const [updateEmployee] = await conectionDB.query('update personEmployee set name = ?, edad = ?, profesion = ? where id = ?', [name, edad, profesion, id]);
            if(updateEmployee.length <= 0) return res.status('404').json({
                message: 'no se encontro el id'
            })
            res.send(updateEmployee[0]);
        } else{
            res.send('faltan datos');
        }
    } catch(error){
        res.status(500).json('error');
    }
};
module.exports.patchEmployee = async (req, res) =>{
    try{
        const {id} = req.params;
        const {name, edad, profesion} = req.body;
        if(name, edad, profesion){
            const [updateEmployee] = await conectionDB.query('update personEmployee set name = ifnull(?, name), edad = ifnull(?, edad), profesion = ifnull(?, profesion) where id = ?', [name, edad, profesion, id]);
            if(updateEmployee.length <= 0) return res.status('404').json({
                message: 'no se encontro el id'
            })
            res.send(updateEmployee);
        } else{
            res.send('faltan datos');
        }
    } catch(error){
        res.status(500).json('error');
    }
};
module.exports.deleteEmployee = async (req, res) =>{
    try{
        const {id} = req.params;
        const deleteEmployee = await conectionDB.query('delete from personEmployee where id = ?', [id]);
        if(deleteEmployee.length <= 0) return res.status('404').json({
            message: 'no se encontro el objeto a eliminar'
        })
        res.send(deleteEmployee[0]);
    } catch(error){
        res.status(500).json('error');
    }
}