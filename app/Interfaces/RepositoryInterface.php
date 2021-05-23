<?php


namespace App\Interfaces;


interface RepositoryInterface
{
    public function all();

    public function create(array $data);

    public function update(array $data, $id);

    public function upload($file,$name,$url);

    public function show($id);

    public function delete($id);

    public function restore($id);

    public function deleteForEver($id);

}