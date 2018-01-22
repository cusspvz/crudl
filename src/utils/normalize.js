import getAllFields from './getAllFields'

/*
* @desc add or change view descriptor
* @data data from the backend
*/
export default function normalize(desc, data) {
    const result = desc.normalize(data)

    getAllFields(desc).forEach((f) => {
        result[f.name] = f.getValue(result)

        if (f.normalize) {
            result[f.name] = f.normalize(result[f.name])
        }
    })

    return result
}
