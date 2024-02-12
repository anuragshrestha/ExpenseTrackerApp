 export function formatDate(date){
    return(
     date.toISOString().slice(0,10)
    )
 }

 export function getDate(date, days){
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
 }