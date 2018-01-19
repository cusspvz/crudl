import getAllFields from './getAllFields'

/*
* @desc add or change view descriptor
* @data data from the backend
*/
export default function normalize(desc, data) {
    const result = desc.normalize(data)

    getAllFields(desc).forEach((f) => {
        if (f.normalize) {
            result[f.name] = f.normalize(f.getValue(result))
        }
    })
    
    return result
}
