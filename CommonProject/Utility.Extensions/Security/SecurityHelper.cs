using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Security.Cryptography;

namespace Utility.Extensions.Security
{
    public class SecurityHelper
    {
        public static byte[] GetSHA1Binary(string source)   //SHA1加密函數
        {
            SHA1CryptoServiceProvider sha1 = new SHA1CryptoServiceProvider();

            return sha1.ComputeHash(Encoding.UTF8.GetBytes(source));
        }
        public static string GetSHA1(string source)         //SHA1加密函數
        {
            return BitConverter.ToString(GetSHA1Binary(source)).Replace("-", string.Empty);
        }
        public static byte[] GetSHA256Binary(string source) //SHA256加密函數
        {
            SHA256Managed sha = new SHA256Managed();

            return sha.ComputeHash(Encoding.UTF8.GetBytes(source));
        }
        public static string GetSHA256(string source)       //SHA256加密函數
        {
            return BitConverter.ToString(GetSHA256Binary(source)).Replace("-", string.Empty);
        }
        public static byte[] GetSHA384Binary(string source) //SHA384加密函數
        {
            SHA384Managed sha = new SHA384Managed();

            return sha.ComputeHash(Encoding.UTF8.GetBytes(source));
        }
        public static string GetSHA384(string source)       //SHA384加密函數
        {
            return BitConverter.ToString(GetSHA384Binary(source)).Replace("-", string.Empty);
        }
    }
}
