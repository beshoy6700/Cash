<?php


namespace App\Repository;


use App\Interfaces\RepositoryInterface;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;


class Repository implements RepositoryInterface
{
    protected $model;

    /**
     * Repository constructor.
     * @param Model $model
     */
    public function __construct(Model $model)
    {
        $this->model = $model;
    }

    public function all($array = null)
    {
        if (isset($array))
        {
            return $this->model->with($array)->paginate(PAGINATION_COUNT);
        }
        return $this->model->paginate(PAGINATION_COUNT);
    }

    public function pluck()
    {
        return $this->model->pluck('name', 'id');
    }

    public function allTrashed()
    {
        return $record = $this->model->onlyTrashed()->paginate(PAGINATION_COUNT);
    }

    public function create(array $data)
    {
        return $this->model->create($data);
    }

    public function update(array $data, $id)
    {
        $record = $this->model->find($id);
        return $record->update($data);
    }

    public function upload($file, $name, $url)
    {
        $image = $file;
        $filename = Str::slug($name) . "." . $image->getClientOriginalExtension();
        $path = public_path($url . $filename);
        $img = Image::make($image->getRealPath())->save($path, 75);
        return $filename;
        /**
         * resize
         *//*$img->resize(300, null, function ($ratio) {
                $ratio->aspectRatio();
            })*/;
    }

    public function show($id)
    {
        return $this->model->findOrFail($id);
    }

    public function ChangeStatus($id,$column='active')
    {
        $record = $this->model->find($id);
        $status = $record->$column == 0 ? 1 : 0;
        return $record->update([$column => $status]);
    }

    public function delete($id)
    {
        return $this->model->destroy($id);
    }

    public function showTrashed($id)
    {
        return $record = $this->model->onlyTrashed()->find($id);
    }

    public function restore($id)
    {
        $record = $this->model->onlyTrashed()->find($id);
        return $record->restore();
    }

    public function deleteForEver($id)
    {
        $record = $this->model->onlyTrashed()->find($id);
        return $record->forceDelete();
    }

    // Set the associated model
    public function getModel()
    {
        return $this->model;
    }

    // Set the associated model
    public function setModel($model)
    {
        $this->model = $model;
        return $this;
    }

    //Eager load database relationships
    public function with($relations)
    {
        return $this->model->with($relations);
    }
}
