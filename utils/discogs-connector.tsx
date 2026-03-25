//this is purely a server-side utility, so we can use node modules and env variables without worrying about client-side bundling issues
"use server"; 
class DiscogsConnector {
    private static instance: DiscogsConnector | null = null;
    private discogs: any;
    private db: any;

    private constructor() {
        const Discogs = require('disconnect').Client;
        this.discogs = new Discogs({
            consumerKey: process.env.DISCOGS_CONSUMER_KEY,
            consumerSecret: process.env.DISCOGS_CONSUMER_SECRET,
        });
        this.db = this.discogs.database();
    }

    static getInstance(): DiscogsConnector {
        if (!DiscogsConnector.instance) {
            DiscogsConnector.instance = new DiscogsConnector();
        }
        return DiscogsConnector.instance;
    }

    async search(query: {}) {
        return new Promise((resolve, reject) => {
            this.db.search(query, (err: any, data: any) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }
}

export default DiscogsConnector;