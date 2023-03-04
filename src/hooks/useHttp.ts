export type Data = {
    id: number;
    name: string;
    description: string;
    thumbnail: {
        path: string,
        extension: string
    }
};

type Response = {
    data: {
        results: Data[]
    };
};


const API_KEY = 'apikey=7bad634f55a19110f2fdcb4bd31953f5'

export const useHttp = () => {

    const request = async (url: string) => {

        try {
            const response = await fetch(url + API_KEY);

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data: Response = await response.json();
            // console.log(data);
            return data.data.results;
        } catch (e) {
            throw e;
        }
    };

    return { request }
}

