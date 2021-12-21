import { WORK_PROP_CONST } from '../Works';

export const works = [
    'table_almighty',
    'web_audio_visualizer',
    'bugs_vs_developer',
]



export const worksData = function () {
    return new Promise(async (resolve, reject) => {
        let result = [];
        try {
            for (const work_path of works) {
                const workModule = await import(`./${work_path}/index.js`);
                workModule.data[WORK_PROP_CONST.FOLDER_NAME] = work_path;
                result.push(workModule.data);
            }
            resolve(result)
        }
        catch (err) {
            reject(err)
        }
    })
}