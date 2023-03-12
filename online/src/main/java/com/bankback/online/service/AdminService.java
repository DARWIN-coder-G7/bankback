package com.bankback.online.service;

import com.bankback.online.entity.Admin;

public interface AdminService {
Admin getbyid(int id);
Admin checkuser(String username,String pass);
Admin Updatepassword(Admin admin,int id);
}
