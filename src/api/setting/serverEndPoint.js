export default {
    getUrl: function(svc) {
        var be_host = process.env.VUE_APP_HOST;
        var post_url = "";
        var ret = "";

        if (svc == "gw") {
            //login
            post_url = ":9800";
            ret = "http://" + be_host + post_url;
        }

        return ret;
    },
};