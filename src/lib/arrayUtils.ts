
export const DeleteItemById = 
    <T extends {id: number | string}>(list: T[], id: number | string): T[] => {
        return list.filter(item => item.id !== id);
    }