 export function formatDate(date){
    return(
        `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    )
 }

 export function getDate(date, days){
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
 }