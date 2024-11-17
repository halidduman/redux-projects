//* Projede kullanılan aksiyon tipleri string şekilde tanımlandığından dikkat
//* dağınıklığı sonucu oluşabilececk ve tespit etmesi zaman alabilecek hataların
//* önüne geçmek için tipleri bir nesne içerisinde tanımlarız.

const ActionTypes = {
  ADD: "ADD",
  DELETE: "DELETE",
  UPDATE: "UPDATE",
  SET: "SET",
};
export default ActionTypes;

export const ADD = "ADD";
