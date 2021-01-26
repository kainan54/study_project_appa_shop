export const toggleCartDisplay = function (): { type: string } {
    return {
        type: 'TOGGLE_CART_DISPLAY',
    };
};

interface ItemData {
    id: number;
    price: number;
    name: string;
    imageUrl: string;
}
export const addItem = function (item: ItemData): { type: string; payload: ItemData } {
    console.log(item);
    return {
        type: 'ADD_CART_ITEM',
        payload: item,
    };
};
