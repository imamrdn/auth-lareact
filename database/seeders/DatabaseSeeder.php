<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        User::create([
            'name'          => 'Admin',
            'email'         => 'super@admin.com',
            'password'      => bcrypt('Admin@123'),
        ]);
    }
}
