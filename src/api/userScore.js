/*
 * @Author: yukang 1172248038@qq.com
 * @Description:成绩管理api
 * @Date: 2020-10-03 11:27:37
 * @LastEditTime: 2021-03-03 19:36:20
 */
import request from "@/utils/request";

export function findUserScore(data) {
  return request({
    url: "/service/plat/admin/findUserScore",
    method: "post",
    data,
  });
}

export function deleteUserScore(data) {
  return request({
    url: "/service/plat/admin/deleteUserScore",
    method: "post",
    data,
  });
}

export function modifyUserScore(data) {
  return request({
    url: "/service/plat/admin/modifyUserScore",
    method: "post",
    data,
  });
}

export function addUserScore(data) {
  return request({
    url: "/service/plat/admin/addUserScore",
    method: "post",
    data,
  });
}

export function getUserScoreTemplate(data) {
  return request({
    url: "/service/plat/admin/getUserScoreTemplate",
    method: "post",
    data,
  });
}

export function importUserScore(data) {
  return request({
    url: "service/plat/admin/importUserScore",
    method: "post",
    data,
  });
}

export function exportUserScore(data) {
  return request({
    url: "service/plat/admin/exportUserScore",
    method: "post",
    data,
  });
}
