export default {
    getUrl: function(svc) {
        var be_host = process.env.VUE_APP_HOST;
        var post_url = "";
        var ret = "";

        if (svc == "cp") {
            //login
            post_url = ":8081";
            ret = "http://" + be_host + post_url;
        }

        return ret;
    },
};