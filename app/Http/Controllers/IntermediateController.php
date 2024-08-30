<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class IntermediateController extends Controller
{
    public function index()
    {
        return Inertia::render('Intermediate/Index'); // Adjust as needed
    }
}
