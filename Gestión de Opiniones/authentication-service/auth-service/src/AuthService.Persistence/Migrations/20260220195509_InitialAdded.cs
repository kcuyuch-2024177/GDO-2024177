using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AuthService.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class InitialAdded : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "user_name",
                table: "users",
                newName: "username");

            migrationBuilder.RenameColumn(
                name: "sur_name",
                table: "users",
                newName: "surname");

            migrationBuilder.RenameIndex(
                name: "ix_users_user_name",
                table: "users",
                newName: "ix_users_username");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "username",
                table: "users",
                newName: "user_name");

            migrationBuilder.RenameColumn(
                name: "surname",
                table: "users",
                newName: "sur_name");

            migrationBuilder.RenameIndex(
                name: "ix_users_username",
                table: "users",
                newName: "ix_users_user_name");
        }
    }
}
