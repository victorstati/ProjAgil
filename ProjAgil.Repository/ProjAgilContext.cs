using Microsoft.EntityFrameworkCore;
using ProjAgil.Domain;

namespace ProjAgil.Repository
{
    public class ProjAgilContext : DbContext
    {
        public ProjAgilContext(DbContextOptions<ProjAgilContext> options) : base(options){ }

        public DbSet<Evento> Eventos { get; set; }
        public DbSet<Palestrante> Palestrantes { get; set; }
        public DbSet<PalestranteEvento> PalestrantesEventos { get; set; }
        public DbSet<Lote> Lotes { get; set; }
        public DbSet<RedeSocial> RedeSociais { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PalestranteEvento>()
                .HasKey(PE => new {PE.EventoId, PE.PalestranteId});
        }
        
    }
}