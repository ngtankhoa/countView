/**
 * CountController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    count_onload: async function (req, res) {
        var numrecord = await Count.count({ countViewTime: 0 });
        return res.view('pages/count', { num: numrecord });
    },

    count: async function (req, res) {
        await Count.create();
        numrecord = await Count.count({ countViewTime: 0 });
        return res.ok({ numrecord });
    },

    reset: async function (req, res) {
        await Count.destroy({countViewTime: 0});
        var numrecord = await Count.count({ countViewTime: 0 });
        return res.ok({ numrecord });
    },

};

