import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/*
 * asenkron thunk aksiyonu
 * Bizden iki parametre ister:
 * 1.Aksiyonun tipi
 * 2.Aksiyonun payloadını return eden fonksiyon
 */

export const getUsers = createAsyncThunk("updated/getUsers", async () => {
  // asenkron işlem
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");

  return res.data;
});

/*
 * `createAsyncThunk` redux toolkitin bir parçası olarak gelir ve asenkron işlemleri yönetmek için kullanılır.
 * `createAsyncThunk` bir asenkron işlem yaratır ve üç farklı eylem tipi(pending,fulfilled,rejected) oluşturur.
 */
