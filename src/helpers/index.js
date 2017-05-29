export function sortByProperty(object, propertyName, sortAsc) {
    let arrayOfObjects = [];
    let sortedArray = [];

    Object.keys(object).forEach((key) => {
        arrayOfObjects.push(object[key]);
    });

    sortedArray = arrayOfObjects.sort((a, b) => {
        if (sortAsc) {
            return a[propertyName] > b[propertyName];
        } else {
            return a[propertyName] < b[propertyName];
        }
    });

    return sortedArray;
}
