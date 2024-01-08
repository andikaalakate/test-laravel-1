<?php

namespace App\Http\Controllers;

use App\Models\Novel;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NovelController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $novels = Novel::all();
        return Inertia::render('Page', [
            'novels' => $novels,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $novels = new Novel();
        $novels->title = $request->title;
        $novels->description = $request->description;
        $novels->image = $request->image;
        $novels->author = $request->author;
        $novels->translator = auth()->user()->name;
        $novels->status = $request->status;
        $novels->genre = $request->genre;
        $novels->save();
        return redirect()->back()->with('message', 'Novel created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Novel $novel)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Novel $novel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Novel $novel)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Novel $novel)
    {
        //
    }
}
