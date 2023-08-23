const Todotask = require('../models/todotask');


async function getItems() {

    const Items = await Todotask.find({});
    return Items;

}
module.exports.home = function (req, res) {

    getItems().then(function (todolist) {
        return res.render('home', {
            list: todolist,
        })
    })
}

module.exports.post = async function (req, res) {

    const contact = new Todotask({
        checked: false,
        task: req.body.task,
        crtegory: req.body.crtegory,
        duedate: req.body.duedate,
    });

    const result = await contact.save();
    return res.redirect('/');
}
module.exports.updatecheck = async (req, res) => {
    let id = req.params.id;
    const doc = await Todotask.findById(id);
    if (doc.checked == true) {
        const ndoc = await Todotask.findByIdAndUpdate(id, {
            checked: false,
        })
    } else {
        const ndoc = await Todotask.findByIdAndUpdate(id, {
            checked: true,
        })
    }
    res.redirect('/');
};
async function idused(id) {
    const doc = await Todotask.findByIdAndRemove(id);
}

module.exports.deletetask = (req, res) => {
    getItems().then(function (todolist) {
        todolist.forEach(element => {
            if (element.checked == true) {
                let id = element._id;
                idused(id);
            }
        });
    })

    return res.redirect('/');
}
