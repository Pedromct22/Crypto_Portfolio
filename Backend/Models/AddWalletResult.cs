﻿using Backend.Database;

namespace Backend.Models
{
    public class AddWalletResult
    {
        public String address { get; set; }

        public List<Object> listAddress { get; set; }
        public Boolean result { get; set; }

        public String reason { get; set; }

        public String test{ get; set; }
    }
}
