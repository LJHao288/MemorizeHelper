using MemorizeHelper.API.Models;
using Microsoft.EntityFrameworkCore;

namespace MemorizeHelper.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options):base(options){}

        public DataContext() { }

        public DbSet<Value> Values { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<MemorizeUnit> MemorizeUnits { get; set; }

        public DbSet<CounterUnit> CounterUnits { get; set; }
    }
}